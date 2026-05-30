from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import httpx, os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SYSTEM_PROMPT = """Eres un asistente bíblico adventista llamado "Luz" para el sitio Fe Sin Filtros.
Tu misión es ayudar a personas que buscan respuestas espirituales sinceras.

Reglas:
- Responde siempre con base en la Biblia (versión Reina Valera 1960)
- Puedes citar escritos de Elena G. de White cuando sea relevante
- Sé cálido, cercano y sin jerga religiosa complicada
- No juzgues nunca al usuario
- Si preguntan sobre doctrinas adventistas, explícalas con amor y claridad
- Si alguien está en crisis emocional, muestra empatía primero
- Responde siempre en español
- Sé conciso — máximo 3 párrafos por respuesta
- Al final sugiere una pregunta de seguimiento natural"""

@app.post("/chat")
async def chat(request: Request):
    body = await request.json()
    messages = body.get("messages", [])

    async with httpx.AsyncClient(timeout=30) as client:
        response = await client.post(
            "https://api.deepseek.com/chat/completions",
            headers={
                "Authorization": f"Bearer {os.getenv('DEEPSEEK_API_KEY')}",
                "Content-Type": "application/json",
            },
            json={
                "model": "deepseek-chat",
                "messages": [
                    {"role": "system", "content": SYSTEM_PROMPT},
                    *messages
                ],
                "max_tokens": 500,
                "temperature": 0.7,
            }
        )
        data = response.json()

        # muestra la respuesta completa para debug
        print("STATUS:", response.status_code)
        print("DEEPSEEK RESPONSE:", data)

        if "choices" not in data:
            return {"reply": f"Error de DeepSeek: {data}"}

        reply = data["choices"][0]["message"]["content"]
        return {"reply": reply}

@app.get("/")
def root():
    return {"status": "Fe Sin Filtros API corriendo ✦"}
