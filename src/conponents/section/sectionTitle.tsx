import Tag from "../tag";

interface ISectionTitleProps {
  title: string;
  tagTitle: string;
}

const SectionTitle = (props: ISectionTitleProps) => {
  const { title, tagTitle } = props;
  return (
    <h1 className="flex items-center text-lg md:text-3xl font-bold dark:text-white gap-x-2">
      {title}
      <Tag tagTitle={tagTitle} />
    </h1>
  );
};

export default SectionTitle;
