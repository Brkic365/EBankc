import React from "react";
import styles from "../../../styles/Post.module.scss";
import Head from "next/head";

import BlogPost from "../../../components/BlogPost";

function Post() {
  const post = {
    title: "What are the risks of DeFi and how can they be mitigated?",
    text: "Traditional and digital assets are in a bear market due to rising inflation and threat of interest rate hikes from the US Federal Reserve",
    img: "money.jpg",
  };

  const postSections = [
    {
      title: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex ligula. Curabitur posuere quam at lacus luctus, nec ultricies leo ultricies. Proin ac efficitur nisi. Sed ut justo at nisl sagittis vehicula. Duis sodales a sem ac scelerisque. Vivamus rhoncus cursus enim mattis pharetra. Nulla placerat tortor varius, sagittis quam at, pretium neque. Nam vel posuere odio. Integer ut felis ut neque faucibus malesuada vel eget sapien. Donec justo quam, feugiat non libero eget, sagittis rutrum massa. In aliquam erat aliquam, rutrum lorem semper, facilisis nibh. Nunc semper placerat eros, vel commodo elit facilisis vel. Mauris id gravida mauris. Cras vehicula diam a consequat rutrum. Curabitur vitae tortor est. Mauris volutpat, urna id laoreet varius, elit quam sodales quam, vel accumsan lorem leo eu lorem. Nam vitae ipsum dolor. Phasellus pretium vestibulum nisl. Nunc quis commodo turpis, at auctor turpis. Aenean vel placerat ipsum. Fusce ultricies interdum malesuada.",
      img: "money.jpg",
    },
    {
      title: "Praesent convallis interdum ligula?",
      text: "Praesent convallis interdum ligula, ac dapibus purus accumsan quis. Quisque vel velit libero. Proin tincidunt, diam a congue varius, purus lectus facilisis eros, eget lacinia orci ex suscipit lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla placerat at mauris consectetur ullamcorper. Duis ipsum massa, ornare at volutpat non, gravida nec nunc. Quisque posuere, massa eget cursus scelerisque, neque lacus placerat turpis, quis ultricies libero leo ut mi. Fusce in justo nulla. Mauris scelerisque consequat nibh vitae facilisis. Quisque consectetur lorem quis risus fermentum tincidunt. Praesent lobortis, tellus id tempor pharetra, felis arcu mollis magna, ac porttitor sapien libero a diam. Vestibulum arcu lacus, dapibus a leo quis, pulvinar tincidunt elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      title: "In elementum tempor nulla, vel bibendum sapien varius nec",
      text: "In elementum tempor nulla, vel bibendum sapien varius nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras aliquet libero ut velit molestie facilisis. Phasellus suscipit suscipit laoreet. Praesent cursus posuere eleifend. Proin libero massa, hendrerit eu nisi et, eleifend convallis sapien. Cras ultricies mauris id purus hendrerit, in volutpat purus scelerisque. Fusce pretium tempor diam quis pharetra. Fusce accumsan dictum sem, vel efficitur erat malesuada vitae. Mauris sit amet finibus odio. Fusce sit amet mi diam. Etiam ac elit facilisis, varius ipsum nec, placerat libero. Nunc gravida accumsan magna non mollis. Phasellus maximus massa vitae sapien feugiat congue. In suscipit sagittis urna, eget euismod mi faucibus quis. Sed imperdiet egestas nunc, ut tincidunt dolor pharetra eget.",
    },
  ];

  return (
    <div className={styles.post}>
      ¸
      <Head>
        <title>EBANKC - {post.title}</title>

        <meta
          name="description"
          content="Unlocking the power of Defi-Banking | Earn Interest, borrow, and exchange digital assets at competitive rates"
        />
      </Head>
      <div className={styles.topBanner}>
        <BlogPost post={post} noBottomText={true} />
      </div>
      {postSections.map((section, i) => (
        <section className={styles.textSection} key={i}>
          {section.title && <h2>{section.title}</h2>}
          {section.text && <p>{section.text}</p>}
          {section.img && (
            <img src={`/images/blog/${section.img}`} alt="Icon of text" />
          )}
        </section>
      ))}
    </div>
  );
}

export default Post;
