import PostsPage from "./views/PostsPage";
import PostPage from "./views/PostPage";
import CreatePost from "./views/CreatePost";
import { Routes, Route } from "react-router-dom";
import UpdatePostPage from "./views/UpdatePost";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/:id" element={<PostPage />} />
                <Route path="/post" element={<CreatePost />} />
                <Route path="/post/:id" element={<UpdatePostPage />} />
            </Routes>
        </div>
    );
}

export default App;
