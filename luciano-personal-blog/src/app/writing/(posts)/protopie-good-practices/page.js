"use client";
import Header from "@/app/writing/_WritingContent/Header/Header.js";
import { Paragraph } from "../../_WritingContent/Paragraph/Paragraph";
import style from "./page.module.css";
import { Code } from "../../_WritingContent/Code/Code";
import { ArticleWrapper } from "../../_WritingContent/ArticleWrapper/ArticleWrapper";
import { LinkComponent } from "../../_WritingContent/LinkComponent/LinkComponent";
import Highlight from "../../_WritingContent/Highlight/Highlight";

export default function page() {
  return (
    <article>
      <Header description={"Random 3D piece by yours truly."} />

      <ArticleWrapper>
        <Paragraph>
          I know, this might seem trivial but hear me out. It's easy to overlook
          the simple stuff. <Highlight text={"make sure to lock your layers."}/>
          unstable — and by that I mean it's super easy to drag things around
          unintentionally.
        </Paragraph>

        <Paragraph>
          Locking your layers is like throwing down some sand for traction. It
          secures everything in place, helping you avoid those 'Oops, I didn't
          mean to move that' <Code>useEffasakasdklasdajsd2jd92jd92=adsj18dasdjajsdasdkjaskdjasdjkasdjksadsldjasdjlasdlsajdashudhasdect((0)=)</Code> moments. Or something like
          realising an animation is wrong 'cause something is out of place but
          you don't know{" "}
          <LinkComponent href={"google.com"} text={"this link"} /> or where that
          thing. Again, the Protopie canvas is not as friendly. Plus, it saves
          time in the long run by reducing unnecessary adjustments.⁠
        </Paragraph>
        <Paragraph>
          This might be counterintuitive but keeping too many layers and groups
          will eventually render your prototype useless. Protopie allows you to
          layer and group elements to your heart's content. But having too many
          can slow down your prototype.
        </Paragraph>
        <Paragraph>
          More importantly, it can affect the quality of your user testing —
          nothing kills user engagement like a lagging interface. Having to
          close and re-open the app during a session can definitely kill the
          immersion and focus. So, convert non-interactive elements into images.
          It helps lighten the load on your prototype, improving its
          performance.
        </Paragraph>
      </ArticleWrapper>
    </article>
  );
}
