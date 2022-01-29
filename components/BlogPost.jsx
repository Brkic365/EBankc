import React from "react";
import normalStyles from "../styles/BlogPost.module.scss";
import miniStyles from "../styles/MiniBlogPost.module.scss";
import Link from "next/link";

function BlogPost({ post, mini = false, noBottomText = false }) {
  const bg = `linear-gradient(180deg, rgba(1, 50, 32, 0), #013220),url("/images/blog/${post.img}")`;

  const styles = mini ? miniStyles : normalStyles;

  return (
    <Link href={`/blog/post/${post.link}`}>
      <div className={styles.blogPost}>
        {/* Title Section */}

        <section
          className={styles.titleSection}
          style={{
            background: bg,
            borderRadius: noBottomText ? "0.5rem" : "0.5rem 0.5rem 0 0",
          }}
        >
          <h1>{post.title}</h1>
        </section>

        {/* Text Section */}
        {!noBottomText && (
          <section className={styles.textSection}>
            <p>{post.text}</p>
            <div className={styles.overGradient} />
          </section>
        )}
      </div>
    </Link>
  );
}

export default BlogPost;
