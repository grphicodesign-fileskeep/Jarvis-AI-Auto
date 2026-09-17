import os
import sys
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
print(f"[OK] Loaded GEMINI_API_KEY: {api_key[:6]}...{api_key[-4:] if api_key else 'None'}")

# Verify packages
import fastapi
import uvicorn
import torch
import cv2
import PIL
import yt_dlp
from google import genai

print(f"[OK] FastAPI: {fastapi.__version__}")
print(f"[OK] PyTorch: {torch.__version__} (CUDA Available: {torch.cuda.is_available()})")
print(f"[OK] OpenCV: {cv2.__version__}")

# Verify Gemini API
client = genai.Client(api_key=api_key)

try:
    response = client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents="Say 'OpenShorts AI is fully operational and ready to generate viral clips!'"
    )
    print("\n" + "="*60)
    print(f"[LIVE GEMINI RESPONSE]: {response.text.strip()}")
    print("="*60)
    print("\n[ALL SYSTEMS OPERATIONAL] OpenShorts is 100% ready!")
except Exception as e:
    print(f"[ERROR] Gemini API Error: {e}")
