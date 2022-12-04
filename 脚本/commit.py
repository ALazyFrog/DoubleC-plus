from contextlib import nullcontext
from types import NoneType
import requests
import json

urlhead = 'https://api.github.com/repos/pytorch/pytorch/commits?page='
urltail = '&per_page=100'
token = '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'
headers = {'Content_Type': 'application/json',
           'Authorization': 'token %s' % token}

index = 501
# index 最大值为545
while index <= 545:
    r = requests.get(urlhead + str(index) + urltail, headers=headers)
    response = r.json()
    for commit in response:
        # print(commit['committer']['url'])
        with open('D:/grade3.1/软件需求工程/DoubleC-plus/users.txt', mode='a', encoding='utf-8') as fw:
            # if commit is None:
            #     print("error\n")
            # else:
            if commit['committer'] is not None and commit is not None:
                fw.write(commit['committer']['url'])
                fw.write('\n')
    print("Page %d get!" % (index))
    index += 1
