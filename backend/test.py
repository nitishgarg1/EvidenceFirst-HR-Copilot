from app.services.ingestion import load_file,chunk_documents
from pathlib import Path

docs=load_file(Path("data/sample_kb/company_hr_handbook.md"))

chunks=chunk_documents(docs)
print(chunks)

# pinecone is mysql,index is similar to create database in mysql,namespace is like creating table in mysql,vector record is like row record in mysql,