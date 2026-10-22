// A screenshot shown inside a plain browser window, with the site's real
// address in the bar. `url` is optional; without it the bar shows `label`.
import { domainOf, hasLink } from '../data/projects';

export default function BrowserFrame({ url, label, className = '', children }) {
  const address = hasLink(url) ? domainOf(url) : label;
  return (
    <div className={`browser ${className}`}>
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots"><i /><i /><i /></span>
        {address && <span className="browser__url">{address}</span>}
      </div>
      <div className="browser__view">{children}</div>
    </div>
  );
}
