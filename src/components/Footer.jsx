import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'
import { organization } from '../config'

@observer
class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="usa-grid">
          <div className="not-real-disclaimer">
            <strong>
              <FormattedMessage
                  id="footer.notRealDisclaimer"
                  description="Mission"
                  defaultMessage="It's about every student, every day."
              />
            </strong>
          </div>
          <img className="logo" src={organization.logoUrl} alt="Trible County Schools Logo" />
          <div>{organization.name}</div>
          <div>{organization.contact.phone} / {organization.contact.email}</div>
          <div>{organization.contact.address}</div>
        </div>
      </footer>
    )
  }
}

export default Footer
