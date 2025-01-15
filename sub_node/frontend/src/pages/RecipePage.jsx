import React, { useEffect, useState } from 'react';
import { Navbar9 } from '../components/NavBar.tsx'; 
import { Blog44 } from '../components/Recipe/Recipe.tsx'; 
import { Footer7 } from '../components/Footer.tsx'; 

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]); // 存储从后端获取的配方数据
  const [loading, setLoading] = useState(true); // 加载状态
  const [error, setError] = useState(null); // 错误状态

  useEffect(() => {
    // 获取数据
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/recipes"); 
        if (!response.ok) {
          throw new Error('数据加载失败');
        }
        const data = await response.json();

        // 将后端返回的数据格式化为 Blog44 所需的格式
        const formattedRecipes = data.map((recipe) => ({
          url: "#", // 默认跳转链接
          image: {
            src: "/images/recipe2.jpeg", // 默认占位图片
            alt: recipe.name,
          },
          category: "Recipe", // 静态分类
          readTime: `${recipe.version} Version`, // 版本号作为阅读时间
          title: recipe.name, // 配方名称
          description: `Cost: ${recipe.cost}`, // 成本信息
          button: {
            title: "View Details",
            variant: "link",
          },
        }));

        setRecipes(formattedRecipes); // 更新配方数据
        setLoading(false); // 设置加载完成
      } catch (err) {
        setError(err.message); // 设置错误信息
        setLoading(false); // 设置加载完成
      }
    };

    fetchRecipes(); // 调用获取数据函数
  }, []);

  // 渲染加载中或错误信息
  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>发生错误: {error}</div>;
  }

  // 渲染页面
  return (
    <div>
      <Navbar9 />
      <Blog44
        tagline="Recipe Management"
        heading="Discover our formulas"
        description="Discover the latest innovative recipes"
        button={{ title: "More", variant: "secondary" }}
        blogPosts={recipes} // 将数据传递给 Blog44 组件
      />
      <Footer7 />
    </div>
  );
};

export default RecipePage;

