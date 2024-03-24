import {React, useState} from 'react';
import { LuCopyCheck  } from "react-icons/lu";
import { IoCopyOutline } from "react-icons/io5";
export default function CopyToClipboard() {
    const [textToCopy, setTextToCopy] = useState('736jmUpuhYU5z4zMkMuc13oDEkgxKcV17QM9wM4jYKBE');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };
  return (
    <div className="copytoclipboard-inner">
        <div className="copytoclipboard">
            <input readOnly type="text"  value={textToCopy}
                onChange={(e) => setTextToCopy(e.target.value)}/>
            <button onClick={handleCopyToClipboard}>
                {!isCopied && (
                <span>
                    <IoCopyOutline />
                </span>
                )}
                {isCopied && (
                <span className='copyed'>
                    <LuCopyCheck />
                </span>
                )}
            </button>
        </div>
    </div>
    
  )
}
