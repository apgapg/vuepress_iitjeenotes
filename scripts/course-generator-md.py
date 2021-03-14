from mdutils.mdutils import MdUtils
import os
import firebase_admin 
from firebase_admin import credentials
from firebase_admin import firestore
from mdutils.tools.Html import Html

# Use a service account
cred = credentials.Certificate('./service.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

users_ref = db.collection(u'courses')
docs = users_ref.stream()

courseList=[]
for doc in docs:
    courseName = doc.to_dict().get('name')
    courseDescription = doc.to_dict().get('description')
    courseCover = doc.to_dict().get('cover')
    dirname = os.path.dirname(__file__)
    mdFileName=courseName.replace(" ", "-").lower()
    filename = os.path.join(dirname, f'../docs/src/guide/courses/{mdFileName}.md')

    mdFile = MdUtils(file_name=filename)

    mdFile.new_header(level=1, title=f'{courseName}')

    mdFile.new_paragraph(f'{courseDescription}')

    if courseCover is not None:
        mdFile.write(f'\n')
        mdFile.new_paragraph(Html.image(path=f'{courseCover}', align='center'))
        mdFile.write(f'\n')

    for topic in doc.to_dict().get('topics'):
        topicId=topic.get('id')
        topicName=topic.get('title')
        topicVideo=topic.get('video')
        mdFile.new_header(level=2, title=f'{topicName}')
        mdFile.write(f'\n::: details View video\n')
        mdFile.write(f'<iframe src="https://player.uacdn.net/lesson-raw/player/v585/player-min.html?uuid={topicId}&amp;use_imgix=1&amp;autoPlay=false&amp;debug=false" allowfullscreen="" scrolling="no" style="width:100%; border: none; margin: 16px 0px" height="350"  ></iframe>')
        mdFile.write(f'\n:::\n')
        mdFile.write(f'\nVideo: [{topicVideo}]({topicVideo})\n')


    courseList.append(f'/guide/courses/{mdFileName}')
    mdFile.create_md_file()

print(courseList)