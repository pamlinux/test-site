from fastapi import FastAPI, Form, Request
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="templates")

from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    sup : list = None


@app.post("/submit")
async def submit(request: Request, taskname: str = Form(...), tasknumber: int = Form(...)):
    print(f'Super <b>resolution</b> completed! task {tasknumber} of {taskname} done')
    
    return f'Super <b>resolution</b> completed! task {tasknumber} of {taskname} done'

@app.post("/submit2")
async def submit2(item: Item):
    print(item)
    return("In submit2")

@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
