import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../../App.css";

const Mypost = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch("/myposts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 200) {
        setPosts(data);
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  // Use useEffect to fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mypost-container">
        <h1>My Posts</h1>
        {posts.length === 0 ? (
          <p>No posts to display</p>
        ) : (
          posts.map((post) => (
            <div key={post.post_id} className="post-card">
              <h2 className="post-title">{post.Topic}</h2>
              <div className="post-details">
                <p>
                  <strong>Name:</strong> {post.Name}
                </p>
                <p>
                  <strong>Profession:</strong> {post.Profession}
                </p>
                <p>
                  <strong>Workplace:</strong> {post.Workplace}
                </p>
                <p>
                  <strong>About Company:</strong> {post.Aboutcompany}
                </p>
                <p>
                  <strong>Required Post:</strong> {post.Requirepost}
                </p>
                <p>
                  <strong>About Post:</strong> {post.Aboutpost}
                </p>
                <p>
                  <strong>Skills Required:</strong>{" "}
                  {`${post.Skill1}, ${post.Skill2}, ${post.Skill3}, ${post.Skill4}`}
                </p>
                <p>
                  <strong>Certifications:</strong>{" "}
                  {`${post.Certification1}, ${post.Certification2}`}
                </p>
                <p>
                  <strong>Openings:</strong> {post.Numberofopenings}
                </p>
                <p>
                  <strong>Stipend:</strong> {post.Stipend}
                </p>
                <p>
                  <strong>Duration:</strong> {post.Duration}
                </p>
                <p>
                  <strong>Start Date:</strong> {post.StartDate}
                </p>
                <p>
                  <strong>Perks:</strong> {`${post.Perk1}, ${post.Perk2}`}
                </p>
                <p>
                  <strong>Email:</strong> {post.Email}
                </p>
                <p>
                  <strong>LinkedIn:</strong> {post.Linkedin}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Mypost;
