const data = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    comment: `“ I've been interested in coding for a while but never taken the
        jump, until now. I couldn't recommend this course enough. I'm now in
        the job of my dreams and so excited about the future. ”`,
    img: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    comment: ` “ If you want to lay the best foundation possible I'd recommend
    taking this course. The depth the instructors go into is incredible.
    I now feel so confident about starting up as a professional
    developer. ”`,
    img: "./images/image-john.jpg",
  },
];

const comment = document.querySelector(".comment");
const username = document.querySelector(".user__name");
const role = document.querySelector(".user__role");
const pic = document.querySelector("figure img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let i = 0;

prev.addEventListener("click", makeChanges);
next.addEventListener("click", makeChanges);

function makeChanges() {
  if (i === 0) i = 1;
  else i = 0;

  comment.textContent = data[i].comment;
  username.textContent = data[i].name;
  role.textContent = data[i].role;
  pic.src = data[i].img;
}
