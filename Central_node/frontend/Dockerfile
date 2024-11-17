# 使用官方 Node.js 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
COPY package*.json ./

# 安装依赖
RUN npm install
# 复制项目文件到容器中
COPY . .
# 构建项目
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动React开发服务器
CMD ["npm", "start"]
