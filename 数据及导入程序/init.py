import pymongo
import jsonlines

def read(filename, colname):
    mydb = myclient['mongoose']
    mycol = mydb[colname]
    with open(filename, 'r+', encoding='utf8') as f:
        for i in jsonlines.Reader(f):
            mycol.insert_one(i)

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
read('early-issues.json', 'EarlyIssueInformation')
read('lately-issues.json', 'LatelyIssueInformation')
read('star-company.json', 'StarCompanyPercent')
read('issue-company.json', 'IssueCompanyPercent')
read('commit-company.json', 'CommitCompanyPercent')
print("db init finished!")
