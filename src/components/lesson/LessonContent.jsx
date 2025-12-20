import BlockRenderer from "../content/BlockRenderer.jsx";

export default function LessonContent({ blocks }) {
  return (
    <article className="sn-lesson__content">
      {blocks.map((b, i) => (
        <BlockRenderer key={b.id ?? `${b.type}-${i}`} block={b} />
      ))}
    </article>
  );
}
