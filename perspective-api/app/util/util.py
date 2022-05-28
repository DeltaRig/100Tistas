from googleapiclient import discovery

API_KEY = "AIzaSyBd4zPfvuuppCP3pXkdj0NRCPmMUzF08vk"

CLIENT = discovery.build(
  "commentanalyzer",
  "v1alpha1",
  developerKey=API_KEY,
  discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
  static_discovery=False,
)

def splitComment(comment: str):
    comment = comment.split()	
    tam = int(len(comment)/2)
    return comment[0:tam], comment[tam:]

def detect(comment, lista: list):
    analyze_request = {
      'comment': { 'text': comment },
      'requestedAttributes': {'TOXICITY': {}, 'INSULT' : {}},
      'languages': ["pt"]
    }
    response = CLIENT.comments().analyze(body=analyze_request).execute()
    response = response['attributeScores']['TOXICITY']['spanScores'][0]['score']['value']

    if round(response) >= 0.6:
        if len(comment.split()) > 1:
            splitted = splitComment(comment)
            detect(" ".join(splitted[0]), lista)
            detect(" ".join(splitted[1]), lista)
        else:
            print("palavra encontrada: ", comment)
            print( response )
            lista.append(comment)

