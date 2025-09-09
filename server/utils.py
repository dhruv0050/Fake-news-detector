import pickle
import os
import json
import re

def clean_text(text):
	text = str(text).lower()
	text = re.sub(r"http\\S+|www\\S+", " ", text)
	text = re.sub(r"<.*?>", " ", text)
	text = re.sub(r"[^a-z0-9\\s]", " ", text)
	text = re.sub(r"\\s+", " ", text)
	return text.strip()

def load_artifacts():
	base_dir = os.path.dirname(os.path.abspath(__file__))
	model_path = os.path.join(base_dir, 'artifacts', 'fakenews_detector.pickle')
	columns_path = os.path.join(base_dir, 'artifacts', 'columns.json')
	with open(model_path, 'rb') as f:
		model = pickle.load(f)
	with open(columns_path, 'r') as f:
		columns = json.load(f)
	return model, columns

def predict_news(model, content):
	cleaned = clean_text(content)
	pred = model.predict([cleaned])[0]
	return pred