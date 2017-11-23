# -*- coding: utf-8 -*-
# Author: Konstantinos Livieratos <livieratos.konstantinos@gmail.com>

import json,pprint
from django.conf import settings
from kafka import KafkaProducer
from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponse

from django.contrib.gis.geoip2 import GeoIP2
import base64
import logging
import json
logger = logging.getLogger(__name__)
producer = KafkaProducer(
    bootstrap_servers=settings.KAFKA_SERVERS,
    retries=5
)


class RequestLoggerMiddleware(MiddlewareMixin):
    """
    Transmits all requests' data to Kafka as a simple string.
    !Attention: Demonstration purpose only!
    """
    def __init__(self, get_response=None):
        self.get_response = get_response

    def process_request(self, request):
        if (request.path!='/a.gif'):
            return 
        info = request.GET


        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        dataExtracted={}
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        dataExtracted['ip']=ip
        if (ip == '127.0.0.1'):
            # ip = '118.69.213.98'
            ip='27.116.56.1' #
            dataExtracted['ip_tmp']=ip
        g = GeoIP2('geoip2_db')
        dataExtracted['country']=str(g.country(ip))
        dataExtracted['city']=str(g.city(ip))
        dataExtracted['_fsid']=request['_fsid']
            


        # producer.send(
        #     topic='test',
        #     key=b'request.tid',
        #     value=info['tid'].encode()
        # )

        logger.warn("\n=================== Data collector")

        logger.warn(json.dumps(dataExtracted))
        pprint.pprint(dataExtracted)

        logger.warn("Data collector ===================\n")
        # producer.send(
        #     topic='test',
        #     key=b'request.t',
        #     value=info['t'].encode()
        # )
        # producer.send(
        #     topic='test',
        #     key=b'request.country',
        #     value=str(g.country(ip)).encode()
        # )
        #
        # producer.send(
        #     topic='test',
        #     key=b'request.city',
        #     value=str(g.city(ip)).encode()
        # )
        # producer = KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'))
        # producer.send('test', {'foo': 'bar'})
        # PIXEL_GIF_DATA = base64.b64decode("")

        return HttpResponse(base64.b64decode(""), content_type='image/gif')
