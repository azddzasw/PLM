import React, { useEffect, useState } from "react";
import { Navbar9 } from "../components/NavBar.tsx";
import { Blog44 } from "../components/Inspiration/Inspiration.tsx";
import { Footer7 } from "../components/Footer.tsx";

const InspirationPage = () => {
  const [inspirations, setInspirations] = useState([]);

  useEffect(() => {
    const fetchInspirations = async () => {
      try {
        const response = await fetch("/inspiration");
        const data = await response.json();

        // 将 API 数据格式化为 Blog44 的数据结构
        const formattedData = data.map((item) => ({
          url: `/inspiration/${item.id}`, // 用 ID 生成详情页链接
          image: {
            src: "/images/recipe3.jpeg", // 默认图片 URL
            alt: item.title || "Default Title", // 如果 title 为 null，则提供默认值
          },
          category: "Inspiration", // 默认分类
          title: item.title || "Untitled", // 如果 title 为 null，则提供默认值
          description: item.description || "No description available.", // 如果 description 为 null，则提供默认值
          button: {
            title: "View Details",
            variant: "link",
          },
        }));

        setInspirations(formattedData);
      } catch (error) {
        console.error("Failed to fetch inspirations:", error);
      }
    };

    fetchInspirations();
  }, []);

  return (
    <div>
      <Navbar9 />
      <Blog44
        tagline="Inspirations"
        heading="Find Your Inspiration"
        description="Browse through various inspirations and ideas."
        button={{ title: "Explore More", variant: "secondary" }}
        blogPosts={inspirations} // 将格式化的数据传递给 Blog44
      />
      <Footer7 />
    </div>
  );
};

export default InspirationPage;

