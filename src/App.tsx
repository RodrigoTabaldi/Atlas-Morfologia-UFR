import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Exercises from "./pages/Exercises";
import ExerciseUpload from "./pages/ExerciseUpload";
import Glossary from "./pages/Glossary";
import TopicPage from "./pages/TopicPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/exercicios" element={<Exercises />} />
        <Route path="/exercicios/:slug" element={<ExerciseUpload />} />
        <Route path="/glossario" element={<Glossary />} />
        <Route path="/topico/:slug" element={<TopicPage />} />
      </Routes>
    </Layout>
  );
}
