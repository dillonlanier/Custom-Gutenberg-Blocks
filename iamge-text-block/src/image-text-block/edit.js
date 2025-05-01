/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
    useBlockProps, 
    InnerBlocks 
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// /**
//  * The edit function describes the structure of your block in the context of the
//  * editor. This represents what the editor will render when the block is used.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
//  *
//  * @return {Element} Element to render.
//  */
const TEMPLATE = [ [ 'core/columns', {}, [
    [ 'core/column', { templateLock: 'all' }, [
        [ 'core/image' ],
    ] ],
    [ 'core/column', { templateLock: 'all' }, [
        ['core/heading'],
        ['core/paragraph'],
        ['core/buttons', {}, [
            ['core/button', { 'className': 'my-custom-button-1' }],
            ['core/button', { 'className': 'my-custom-button-2' }]
        ]],
    ] ],
] ] ];

export default function Edit( { className } ) {
    
    return(
        <div className={ className }>
                <InnerBlocks
                    template={ TEMPLATE }
                    templateLock="all"
                />
        </div>
    );
}