import { SNNote, PayloadSource } from 'snjs';
import { WebApplication } from './application';
export declare class Editor {
    note: SNNote;
    private application;
    private _onNoteChange?;
    private _onNoteValueChange?;
    private removeStreamObserver;
    isTemplateNote: boolean;
    constructor(application: WebApplication, noteUuid?: string, noteTitle?: string);
    private handleNoteStream;
    insertTemplatedNote(): Promise<import("../../../../../snjs/dist/@types").SNItem>;
    /**
     * Reverts the editor to a blank state, removing any existing note from view,
     * and creating a placeholder note.
     */
    reset(noteTitle?: string): Promise<void>;
    deinit(): void;
    /**
     * Register to be notified when the editor's note changes.
     */
    onNoteChange(onNoteChange: () => void): void;
    /**
     * Register to be notified when the editor's note's values change
     * (and thus a new object reference is created)
     */
    onNoteValueChange(onNoteValueChange: (note: SNNote, source?: PayloadSource) => void): void;
    /**
     * Sets the editor contents by setting its note.
     */
    setNote(note: SNNote): void;
}
