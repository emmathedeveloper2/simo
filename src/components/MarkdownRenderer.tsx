import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownRenderer = ({ text } : { text: string }) => {

  return (
    <div>
      <ReactMarkdown
        children={text}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}

export default MarkdownRenderer;