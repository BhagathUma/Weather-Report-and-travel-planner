from bson import ObjectId
from datetime import datetime


def serialize_document(document):

    if not document:
        return None

    serialized = {}

    for key, value in document.items():

        if isinstance(value, ObjectId):
            serialized[key] = str(value)

        elif isinstance(value, datetime):
            serialized[key] = value.isoformat()

        else:
            serialized[key] = value

    return serialized