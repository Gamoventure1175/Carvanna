"use client";

export default function Doodle() {
  return (
    <css-doodle>
      {`:doodle {
            @grid: 30x1;
            width: 100%;
            height: 200px;
        }

        background: linear-gradient(
            to right,
            #333 40%,
            transparent 0%
        );
        background-size: 10px 100%;
        background-repeat: repeat-x;
        transform: translateX(@r(-5px, 5px)) rotate(@r(-3deg, 3deg));
        opacity: @r(0.3, 0.7);`}
    </css-doodle>
  );
}
