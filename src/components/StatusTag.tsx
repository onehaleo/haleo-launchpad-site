import React from 'react';

/** Full class names written out so Tailwind keeps them in the build. */
const TAGS = {
  approved: { label: 'Approved', cls: 'hl-tag hl-tag--approved' },
  review: { label: 'Needs review', cls: 'hl-tag hl-tag--review' },
  blocked: { label: 'Not allowed', cls: 'hl-tag hl-tag--blocked' },
} as const;

/** The Haleo inspection tag: a colored stub with a punched hole, the word on white. */
const StatusTag = ({ status, label }: { status: keyof typeof TAGS; label?: string }) => (
  <span className={`${TAGS[status].cls} shrink-0`}>
    <span>{label ?? TAGS[status].label}</span>
  </span>
);

export default StatusTag;
