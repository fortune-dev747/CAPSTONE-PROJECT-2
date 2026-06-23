import styles from './SearchBar.module.css'

export function SearchBar({ value, onChange }) {
    return (
        <div className={styles.searchWrapper}>
            <div className={styles.searchContainer}>
                <svg
                    className={styles.searchIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search devices..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                {value && (
                    <button className={styles.clearBtn} onClick={() => onChange('')}>✕</button>
                )}
            </div>
        </div>
    )
}