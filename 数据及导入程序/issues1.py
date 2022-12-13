from contextlib import nullcontext
import requests
import json


url = 'https://api.github.com/repos/pytorch/pytorch/issues/'
token = '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'
headers = {'Content_Type': 'application/json',
           'Authorization': 'token %s' % token}

index = 20772
while index <= 30000:

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
    with open('C:/Users/86135/Desktop/数据及导入程序/issues20000-30000.json', mode='a', encoding='utf-8') as fw:
        json.dump(data, fw, ensure_ascii=False)
        fw.write('\n')

    # print("json对象为 ", json_data)
    print("Issue %d get!" % (index))
    index += 1
