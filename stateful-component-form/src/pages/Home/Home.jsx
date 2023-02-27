import classes from "./Home.module.scss";
import { BaseLayout, Counter } from "@/components";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useMouse } from "@/hooks/useMouse";

/* Component ---------------------------------------------------------------- */

export default function Home() {
  useDocumentTitle("홈 → Likelion 4th");

  const { x, y } = useMouse(10);

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          x: <span>{x}</span> / y: <span>{y}</span>
        </div>
        <Counter count={10} step={3} />
      </div>
    </BaseLayout>
  );
}
