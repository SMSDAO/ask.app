from fastapi import APIRouter, Request

router = APIRouter()

@router.post("/learn")
async def learn_from_user(request: Request):
    data = await request.json()
    print("Learning from:", data)
    return {"status": "learning", "input": data}
