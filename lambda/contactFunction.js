import json
import boto3
import uuid
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ContactMessages')


def lambda_handler(event, context):
    body = json.loads(event['body'])
    
    item = {
        'id': str(uuid.uuid4()),
        'name': body['name'],
        'email': body['email'],
        'message': body['message'],
        'timestamp': datetime.now().isoformat()
    }
    
    table.put_item(Item=item)
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'message': 'Message stored successfully'})
    }
