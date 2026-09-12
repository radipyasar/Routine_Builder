import express, {Express, Request, Response} from 'express';
import cors from "cors";
import { courses } from './data';
import { findRoutines, scoreRoutine } from './logic';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from express!');
});

app.get("/courses",(req:Request,res:Response) => {
  res.json(courses);
})

app.post("/solve",(req:Request,res:Response) => {
  try {
    const codes:string[] = req.body.codes;
    const selected = courses.filter(
      course => codes.includes(course.code)
    );
    const routines = findRoutines(selected);
    routines.sort(
      (a,b) => scoreRoutine(b) - scoreRoutine(a)
    );
    res.json(routines.slice(0,1000));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not generate routines" });
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;