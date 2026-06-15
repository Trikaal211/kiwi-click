import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import { 
  Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, 
  List, ListOrdered, Quote, Highlighter as HighlightIcon, Link as LinkIcon, 
  Image as ImageIcon, Table as TableIcon, Undo, Redo, AlertCircle
} from 'lucide-react';


interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-accent-orange underline hover:text-accent-hover cursor-pointer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-xl max-w-full h-auto border border-border-color my-4 shadow-sm mx-auto block',
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse border-2 border-border-color my-4 w-full text-sm',
        },
      }),
      TableRow,
      TableHeader.configure({
        HTMLAttributes: {
          class: 'border border-border-color bg-page-bg-sec font-bold p-2 text-left',
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-border-color p-2 text-left',
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl);
    
    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const insertCallout = () => {
    // Inserts a callout-styled HTML block directly into the document
    editor.chain().focus().insertContent(
      '<div style="background: rgba(107,192,89,0.1); border-left: 4px solid var(--accent-green); padding: 12px; margin: 15px 0; border-radius: 4px;"><p style="margin: 0; font-weight: 500;">💡 Callout: Enter callout content here...</p></div>'
    ).run();
  };

  return (
    <div className="border-2 border-border-color rounded-2xl overflow-hidden bg-card-bg transition-theme">
      {/* Editor Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-3 border-b-2 border-border-color bg-page-bg-sec transition-theme">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('bold') ? 'bg-accent-orange text-white' : 'text-text-primary'}`}
          title="Bold"
        >
          <Bold size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('italic') ? 'bg-accent-orange text-white' : 'text-text-primary'}`}
          title="Italic"
        >
          <Italic size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('strike') ? 'bg-accent-orange text-white' : 'text-text-primary'}`}
          title="Strike"
        >
          <Strikethrough size={15} />
        </button>

        <div className="h-6 w-[1.5px] bg-border-color mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('heading', { level: 1 }) ? 'bg-accent-emerald text-white animate-pulse' : 'text-text-primary'}`}
          title="Heading 1"
        >
          <Heading1 size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('heading', { level: 2 }) ? 'bg-accent-emerald text-white animate-pulse' : 'text-text-primary'}`}
          title="Heading 2"
        >
          <Heading2 size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('heading', { level: 3 }) ? 'bg-accent-emerald text-white animate-pulse' : 'text-text-primary'}`}
          title="Heading 3"
        >
          <Heading3 size={15} />
        </button>

        <div className="h-6 w-[1.5px] bg-border-color mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('bulletList') ? 'bg-accent-green text-white' : 'text-text-primary'}`}
          title="Bullet List"
        >
          <List size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('orderedList') ? 'bg-accent-green text-white' : 'text-text-primary'}`}
          title="Ordered List"
        >
          <ListOrdered size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('blockquote') ? 'bg-accent-emerald text-white' : 'text-text-primary'}`}
          title="Quote"
        >
          <Quote size={15} />
        </button>
        <button
          type="button"
          onClick={insertCallout}
          className="p-2 rounded-lg hover:bg-hover-highlight transition-all text-text-primary"
          title="Callout Box"
        >
          <AlertCircle size={15} />
        </button>

        <div className="h-6 w-[1.5px] bg-border-color mx-1"></div>

        <button
          type="button"
          onClick={addLink}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('link') ? 'bg-accent-orange text-white' : 'text-text-primary'}`}
          title="Insert Link"
        >
          <LinkIcon size={15} />
        </button>
        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded-lg hover:bg-hover-highlight transition-all text-text-primary"
          title="Insert Image"
        >
          <ImageIcon size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-2 rounded-lg hover:bg-hover-highlight transition-all ${editor.isActive('highlight') ? 'bg-accent-green text-white' : 'text-text-primary'}`}
          title="Highlight Text"
        >
          <HighlightIcon size={15} />
        </button>
        <button
          type="button"
          onClick={insertTable}
          className="p-2 rounded-lg hover:bg-hover-highlight transition-all text-text-primary"
          title="Insert Table"
        >
          <TableIcon size={15} />
        </button>

        <div className="h-6 w-[1.5px] bg-border-color mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded-lg hover:bg-hover-highlight transition-all text-text-primary disabled:opacity-30"
          title="Undo"
        >
          <Undo size={15} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded-lg hover:bg-hover-highlight transition-all text-text-primary disabled:opacity-30"
          title="Redo"
        >
          <Redo size={15} />
        </button>
      </div>

      {/* Editor Content Area */}
      <div className="p-5 min-h-[350px] max-h-[600px] overflow-y-auto prose dark:prose-invert max-w-none focus:outline-none">
        <EditorContent editor={editor} className="outline-none min-h-[350px]" />
      </div>
    </div>
  );
}
