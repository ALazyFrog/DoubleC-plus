from contextlib import nullcontext
import requests
import json


url = 'https://api.github.com/repos/pytorch/pytorch/issues/'
token = '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'
headers = {'Content_Type': 'application/json',
           'Authorization': 'token %s' % token}

index = 89533
while index <= 90000:

    r = requests.get(url + str(index), headers=headers)
    response_j = r.json()
    if r.status_code == 404:
        print("Issue %s error!" % (index))
        index += 1
        continue
    data = {
        'number': response_j['number'],
        'title': response_j['title'],
        'time': response_j['created_at'],
        'body': response_j['body']
    }
    # json_data = json.dumps(data)
    with open('D:/grade3.1/软件需求工程/DoubleC-plus/issues.json', mode='a', encoding='utf-8') as fw:
        json.dump(data, fw, ensure_ascii=False)
        fw.write('\n')

    # print("json对象为 ", json_data)
    print("Issue %d get!" % (index))
    index += 1
