from contextlib import nullcontext
from types import NoneType
import requests
import json

urlhead = 'https://api.github.com/users/'

token = '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'
headers = {'Content_Type': 'application/json',
           'Authorization': 'token %s' % token}

index = 1
for line in open('D:/grade3.1/软件需求工程/DoubleC-plus/user2.txt'):
    line = line.rstrip("\n")
    print(urlhead + line)
    r = requests.get(urlhead + line, headers=headers)
    response = r.json()
    # print(response)
    with open('D:/grade3.1/软件需求工程/DoubleC-plus/company.txt', mode='a', encoding='utf-8') as fw:
        # if response['company'] is not None and response is not None:
        #     fw.write("%d, %s\n" % (index, response['company']))
        # else:
        #     print("index %d error!\n" %(index));
        fw.write("%d, %s\n" % (index, response['company']))
        index += 1
