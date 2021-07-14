import React, {Component} from 'react';

class FilterGroup extends Component {
    render() {
        return (
            <article className="filter-group">
                <header className="card-header">
                    <a>
                        <h6 className="title">More filter </h6>
                    </a>
                </header>
                <div className="filter-content show">
                    <div className="card-body">
                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Any condition</div>
                        </label>

                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Brand new</div>
                        </label>

                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Used items</div>
                        </label>

                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Very old</div>
                        </label>
                    </div>
                </div>
            </article>
        );
    }
}

export default FilterGroup;