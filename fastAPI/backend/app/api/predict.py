from fastapi import APIRouter
from app.schemas import PredictRequest, PredictResponse

router = APIRouter(prefix="/predict", tags=["predict"])

@router.post("", response_model=PredictResponse)
def predict(req: PredictRequest):
    text = req.text
    result = f"你输入的文本长度是：{len(text)}"
    return PredictResponse(result=result)
