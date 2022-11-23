import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, clickLanguageFilter} = props
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'
  const onClickLanguageFilter = () => {
    clickLanguageFilter(languageFilterDetails.id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {languageFilterDetails.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
