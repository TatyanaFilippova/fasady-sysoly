"use client";

import {
  Container,
  Title,
  Wrapper,
  ButtonFacade,
  ShellDescription,
} from "@/components/otherServices/OtherServices.styled";
import Link from "next/link";
import ContentList, {
  ContentListProps,
} from "@/components/contentList/ContentList";

const OtherServices = ({ data }: ContentListProps) => {
  return (
    <Wrapper>
      <Title>Другие услуги</Title>
      <Container>
        <ContentList data={data.slice(0, 3)} />
      </Container>
      <div>
        <ShellDescription>
          <Link href="/painting">
            <ButtonFacade>Посмотреть все услуги</ButtonFacade>
          </Link>
        </ShellDescription>
      </div>
    </Wrapper>
  );
};

export default OtherServices;
