"use client";

import { CMS_URL } from "@/constant";
import Card from "@/app/painting/card/Card";
import { Wrapper } from "@/app/painting/content/Content.styled";

export interface ContentListProps {
  data: {
    title: string;
    summary: string;
    sort: number;
    cardImage: {
      url: string;
    };
  }[];
}

const ContentList = ({ data }: ContentListProps) => {
  return (
    <Wrapper>
      {data.map((card) => (
        <Card
          title={card.title}
          summary={card.summary}
          cardImage={CMS_URL + card.cardImage.url}
          key={card.sort}
        />
      ))}
    </Wrapper>
  );
};

export default ContentList;
