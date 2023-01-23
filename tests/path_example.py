if __name__ == '__main__':

    from cmx import doc
    from ml_logger import logger

    doc.config("README.md", logger=logger)
    logger.job_started()
    doc @ """
    # README
    
    This is an example for using `cmx` to write to ML-Logger.
    """
    doc.flush()


