from ast import IfExp
from contextlib import nullcontext
from types import NoneType
import requests
import json

urlhead = 'https://api.github.com/repos/pytorch/pytorch/pulls?page='
urltail = '&per_page=100&state=all'
token = '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'
headers = {'Content_Type': 'application/json',
           'Authorization': 'token %s' % token}

index = 1
# index 最大值为597(closed)
while index <= 99:
    r = requests.get(urlhead + str(index) + urltail, headers=headers)
    response = r.json()
    for commit in response:
        if commit is not None:
            data = {
                'number': commit['number'],
                'title': commit['title'],
                'state' : commit['state'],
                'time': commit['created_at'],
                'body': commit['body'],
                'label': commit['labels']
            }
            with open('D:/grade3.1/软件需求工程/DoubleC-plus/pr.txt', mode='a', encoding='utf-8') as fw:
                json.dump(data, fw, ensure_ascii=False)
                fw.write('\n')
    print("Page %d get!" % (index))
    index += 1
