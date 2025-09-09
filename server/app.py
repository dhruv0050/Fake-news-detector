from flask import Flask, request, jsonify
from flask_cors import CORS
import utils

app = Flask(__name__)
CORS(app)

model, columns = utils.load_artifacts()

@app.route('/predict', methods=['POST'])
def predict():
	data = request.get_json()
	content = data.get('content', '')
	if not content:
		return jsonify({'error': 'No content provided'}), 400
	prediction = utils.predict_news(model, content)
	return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
	app.run(debug=True)