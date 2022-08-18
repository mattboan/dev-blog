import "../css/editor.css"
import { $getRoot, $getSelection } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { theme } from "../defs/editor-theme";

export interface EditorProps {
    namespace: string;
    onError?: Function;
}

export const Editor = (props: EditorProps) => {
    // Handle the editor error
    const onError = (error: any) => {
        console.error(error);
        props?.onError && props.onError(error);
    };

    // Handle the on change
    const onChange = () => {
        console.log("Editor state changed: ");
    };


    return (
        <div className="editor-con">
            <LexicalComposer
                initialConfig={{
                    namespace: props.namespace,
                    theme: theme,
                    onError: onError,
                }}
            >
                <PlainTextPlugin contentEditable={<ContentEditable />} placeholder={<div>Enter some text...</div>} />
                {/* <OnChangePlugin onChange={onChange} /> */}
                <HistoryPlugin />
            </LexicalComposer>
        </div>
    );
};
