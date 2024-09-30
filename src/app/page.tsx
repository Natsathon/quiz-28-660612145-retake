import Image from "next/image";
import styles from "./page.module.css";

import Comment from "@/components/Comment";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner user="Natsaton Phanamphan 660612145" picture="/profileImages/photo.jpg" />

        {/* Comment Example */}
        <Comment ImagePath="/profileImages/lisa.jpg" username="Lisa" commentTitle="จริงค่าาาาา" likes="555" replies=""/>
        
        {/* Reply Example */}
        <Reply ImagePath="/profileImages/popcat.png" username="Cat Meme" replyTitle="ลิซ่าาาาาาา Rockstar" likes="20"/>
        <Reply ImagePath="/profileImages/puppy.jpg" username="หมาน้อย" replyTitle="จริงด้วยค้าบบบบบบบบ" likes="0"/>

        {/* map-loop render Comment component here */}
        {comments.map(comment => (
          <Comment  ImagePath={comment.userImagePath}
                    username={comment.username}
                    commentTitle={comment.commentText}
                    likes={comment.likeNum}
                    replies={comment.replies[0]}
          />
        ))}
      </div>
    </div>
  );
}