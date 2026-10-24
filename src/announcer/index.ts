import { tagged as css } from '@neovici/cosmoz-utils';
import { component, sheet, useEffect, useState } from '@pionjs/pion';
import { html } from 'lit-html';

const styles = css`
	.announcer {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}
`;

// must outlive the screen reader's queue pickup; releasing earlier risks a
// lost announcement, later a longer double-text window
const RELEASE_MS = 1000;

type Props = { message?: string };

export const Announcer = (host: HTMLElement & Props) => {
	const [announce, setAnnounce] = useState('');

	useEffect(() => {
		const { message = '' } = host;
		setAnnounce(message);
		if (!message) return;
		const release = setTimeout(() => setAnnounce(''), RELEASE_MS);
		return () => clearTimeout(release);
	}, [host.message]);

	return html`<span class="announcer" aria-live="polite" aria-atomic="true"
		>${announce}</span
	>`;
};

customElements.define(
	'cosmoz-announcer',
	component<HTMLElement & Props>(Announcer, {
		styleSheets: [sheet(styles)],
	}),
);
