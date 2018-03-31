from urllib.request import Request, urlopen
import urllib.request as r
from bs4 import BeautifulSoup as soup
def d(url,i):
    u=Request(url,headers={'User-Agent': 'Mozilla/5.0'})
    web=urlopen(u).read()
    s=soup(web,"html.parser")
    if s==None:
        print("wrong")
        return
    s=s.find_all("div", class_="btn-primary btn--lg btn--splitted")
    if s==None:
        return
    for j in s:
        k=j.a.get('href')
        file=open(str(i)+'.jpeg','wb')
        ur=Request(k,headers={'User-Agent': 'Mozilla/5.0'})
        file.write(urlopen(ur).read())
        file.close()
print("Enter Your query")
query=input()
query.replace(" ","%20")
print(query)
url="https://www.pexels.com/search/"+query
req=Request(url, headers={'User-Agent': 'Mozilla/5.0'})
webpage=urlopen(req).read()
sp=soup(webpage,"html.parser")
i=101
lis=[]
for article in sp.find_all('article', class_='photo-item'):
    t=article.a.get('href')
    if t!=None:
        t="https://www.pexels.com"+t
        lis.append(t)
for url in lis:
    d(url,i)
    i=i+1
